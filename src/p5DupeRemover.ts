import { useEffect, useState } from 'react';

export const useP5DupeRemover = () => {
  const [parent, setParent] = useState<Element>();

  useEffect(() => {
    if (!parent) return;
    const allButFirst = Array.from(parent.children).slice(1);
    allButFirst.forEach((child) => {
      parent.removeChild(child);
    });
  }, [parent]);

  return setParent;
}
