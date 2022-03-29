import { useCallback, useMemo } from 'react';

import { TableHead } from '../../Table/TableHead';
import { TableCell, TableRow } from '../../Table';
import { Typography } from '../../Typography';
import { Checkbox } from '../../Checkbox';
import { DataGridHeadProps } from '../types';
import { SortStates } from '../constants';

import { StyledTableCell, StyledTableSortLabel } from './styled';

export function DataGridHead<T>({
  columns,
  selectable,
  onSelectAllRows,
  selectedCount,
  totalCount,
  onSort,
  sorting = [],
}: DataGridHeadProps<T>) {
  const checked = useMemo(
    () => Boolean(totalCount) && totalCount === selectedCount,
    [selectedCount, totalCount]
  );

  const indeterminate = useMemo(
    () => Boolean(selectedCount) && selectedCount < totalCount,
    [selectedCount, totalCount]
  );

  const handleSort = useCallback(
    (field, sortable) => () => {
      if (sortable) {
        const currentSort = sorting.find(({ fieldId }) => fieldId === field);

        if (currentSort && currentSort.sort === SortStates.ASC) {
          const newSorting = [
            ...sorting.filter(({ fieldId }) => fieldId !== field),
            { fieldId: field, sort: SortStates.DESC },
          ];

          return onSort(newSorting);
        } else if (currentSort && currentSort.sort === SortStates.DESC) {
          const newSorting = sorting.filter(({ fieldId }) => fieldId !== field);

          return onSort(newSorting);
        }

        onSort([...sorting, { fieldId: field, sort: SortStates.ASC }]);
      }
    },
    [sorting]
  );

  return (
    <TableHead>
      <TableRow>
        {selectable && (
          <TableCell padding="checkbox">
            <Checkbox
              checked={checked}
              indeterminate={indeterminate}
              onChange={onSelectAllRows}
            />
          </TableCell>
        )}
        {columns.map(({ field, label, sortable }) => {
          const sortParams = sorting.find(({ fieldId }) => field === fieldId);
          const hideSortIcon = !Boolean(sortParams);
          const sortDirection = sortParams ? sortParams.sort : SortStates.ASC;

          return (
            <StyledTableCell key={field} onClick={handleSort(field, sortable)}>
              <Typography variant="pointer">{label}</Typography>
              {sortable && (
                <StyledTableSortLabel
                  hideSortIcon={hideSortIcon}
                  direction={sortDirection}
                  active={true}
                />
              )}
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}
