import { useEffect } from "react";

const useClosePopup = (
  setState: React.Dispatch<React.SetStateAction<boolean>>,
  overlayRef: React.RefObject<HTMLElement>,
  iconRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLElement;
      if (
        !overlayRef.current?.contains(eventTarget) &&
        !iconRef.current?.contains(eventTarget)
      ) {
        setState(false);
      }
    };

    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, [setState, overlayRef, iconRef]);
};

export default useClosePopup;
