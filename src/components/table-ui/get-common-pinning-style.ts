import type { CSSProperties } from 'react';
import type { Column } from '@tanstack/react-table';

export default function getCommonPinningStyle<T>(
  column: Column<T>
): CSSProperties {
  const isPinned = column.getIsPinned();
  const width = column.getSize();

  if (!isPinned) {
    return {
      width,
    };
  }

  return {
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: 'sticky',
    width,
    zIndex: 1,
  };
}
