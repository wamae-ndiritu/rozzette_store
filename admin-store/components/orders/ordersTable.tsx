"use client";

import React, { useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
} from "@tanstack/react-table";
import { ordersData } from "@/app/ordersData";

type Order = {
  orderId: string;
  customer: string;
  date: string;
  status: string;
  totalAmount: number;
};

const OrdersTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "orderId",
      header: "Order ID",
      enableSorting: true,
    },
    {
      accessorKey: "customer",
      header: "Customer",
      enableSorting: true,
    },
    {
      accessorKey: "email",
      header: "Email",
      enableSorting: true,
    },
    {
      accessorKey: "date",
      header: "Date",
      enableSorting: true,
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "totalAmount",
      header: "Total Amount",
      cell: ({ getValue }) => `KES ${getValue<number>().toFixed(2)}`,
      enableSorting: true,
    },
  ];

  const table = useReactTable({
    data: ordersData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="w-full border border-gray-100 rounded-lg p-4">
      <h2 className="my-2 text-xl font-semibold px-2">Orders List</h2>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-4 py-2 text-left text-sm font-semibold text-gray-900'
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === "asc"
                      ? " 🔼"
                      : " 🔽"
                    : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='hover:bg-gray-100'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='px-4 py-2 text-sm text-gray-700'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;