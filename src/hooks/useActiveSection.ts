import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    let frameId = 0;

    const updateActiveSection = () => {
      // Match the section that has reached the area immediately below the
      // sticky header. This remains deterministic during smooth scrolling.
      const activationLine = 80;
      let currentId = sections[0]?.id ?? "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveId((previousId) =>
        previousId === currentId ? previousId : currentId,
      );
      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, [sectionIds]);

  return activeId;
}
