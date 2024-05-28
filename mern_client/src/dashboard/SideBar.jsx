import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiCloudUpload, HiInbox, HiLogin, HiLogout, HiShoppingBag, HiTable, HiUpload, HiUser, HiUserAdd, HiViewBoards } from "react-icons/hi";


const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw3zU3LBFcBoYobQQC-4QQzQZnZURJp3YMakmeoblVd28JkFz2y7zgo1IHC7IhZCT9wk&usqp=CAU" className='w-14 h-14 rounded-md'>Admin User
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiLogin}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/register" icon={HiUserAdd}>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiLogout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar
