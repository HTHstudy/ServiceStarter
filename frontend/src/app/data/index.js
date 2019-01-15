import asyncRoute from 'lib/asyncRoute';

export const DataTestHomeUser = asyncRoute(() => import('./home/DataTestHomeUser'));
export const DataTestHomeGroup = asyncRoute(() => import('./home/DataTestHomeGroup'));
export const DataTestHomeSign = asyncRoute(() => import('./home/DataTestHomeSign'));
// data test inserted automatically