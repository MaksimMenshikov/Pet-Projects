

import CategoriesTable from '../components/CategoriesTable';
import { Outlet } from 'react-router-dom';
import React from 'react';
import useCategories from '../../../common/categories/hook/useCategories';

function CategoriesList() {
    return (
        <>
            <CategoriesTable />
            <Outlet />
        </>
    );
}

export default CategoriesList;