import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiCloudUpload, HiInbox, HiLogin, HiLogout, HiShoppingBag, HiTable, HiUpload, HiUser, HiUserAdd, HiViewBoards } from "react-icons/hi";


const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='h-screen w-96'>
      <Sidebar.Logo href="#" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw3zU3LBFcBoYobQQC-4QQzQZnZURJp3YMakmeoblVd28JkFz2y7zgo1IHC7IhZCT9wk&usqp=CAU" className='w-14 h-14 rounded-md  ml-5 mt-5' >Admin User
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className='text-xl ml-5'>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload} className='text-xl  ml-5'>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen} className='text-xl ml-5'>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className='text-xl ml-5'>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiLogin} className='text-xl ml-5'>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/register" icon={HiUserAdd} className='text-xl ml-5'>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiLogout} className='text-xl ml-5'>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className='text-xl ml-5'>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className='text-xl ml-5'>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className='text-xl ml-5'>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar
