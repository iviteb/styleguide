import { useMemo, useState } from 'react'

const EMPTY_STATE_SIZE_IN_ROWS = 5
export const TABLE_HEADER_HEIGHT = 36

export default function useTableMeasures({
  size = 0,
  density: initDensity = Density.Regular,
  headless = false,
}: MeasuresInput) {
  const [density, setDensity] = useState<Density>(initDensity)

  const rowHeight = useMemo(() => getRowHeight(density), [density])

  const tableHeight = useMemo(
    () => calculateTableHeight(rowHeight, size, headless) + size,
    [headless, rowHeight, size]
  )

  const bodyHeight = useMemo(
    () => calculateTableHeight(rowHeight, size, true),
    [rowHeight, size]
  )

  return useMemo(
    () => ({
      density,
      rowHeight,
      tableHeight,
      bodyHeight,
      setDensity,
    }),
    [bodyHeight, density, rowHeight, tableHeight]
  )
}

export type MeasuresInput = {
  size: number
  density?: Density
  headless?: boolean
}

export function calculateTableHeight(
  rowHeight: number,
  tableSize: number,
  headless: boolean
): number {
  const multiplicator = tableSize !== 0 ? tableSize : EMPTY_STATE_SIZE_IN_ROWS
  return (headless ? 0 : TABLE_HEADER_HEIGHT) + rowHeight * multiplicator
}

export enum Density {
  Compact = 'compact',
  Regular = 'regular',
  Comfortable = 'comfortable',
}

export enum DesitySizes {
  Compact = 32,
  Regular = 48,
  Comfortable = 76,
}

export const DENSITY_OPTIONS = [
  Density.Compact,
  Density.Regular,
  Density.Comfortable,
]

export function getRowHeight(density: Density): number {
  switch (density) {
    case Density.Compact:
      return DesitySizes.Compact
    case Density.Regular:
      return DesitySizes.Regular
    case Density.Comfortable:
      return DesitySizes.Comfortable
  }
}
