import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BadgeIcon from '@mui/icons-material/Badge';
import ElderlyIcon from '@mui/icons-material/Elderly';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const SidebarData = [
	{
		title: "Home",
		icon: <HomeIcon />,
		link: "home"
	},
	{
		title: "Dashboard",
		icon: <DashboardIcon />,
		link: "dashboard"
	},
	{
		title: "Staff",
		icon: <BadgeIcon />,
		link: "staff"
	},
	{
		title: "Tenants",
		icon: <ElderlyIcon />,
		link: "tenant"
	},
	{
		title: "Rooms",
		icon: <RoomServiceIcon />,
		link: "room"
	},
	{
		title: "Administration Menu",
		icon: <AdminPanelSettingsIcon />,
		link: "admin"
	}

]
