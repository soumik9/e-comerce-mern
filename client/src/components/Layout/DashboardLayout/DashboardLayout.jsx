import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { dashboardMenuItems } from '../../../config/constants/constants';
import DashboardHeader from './DashboardHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children }) => {

    // global
    const router = useRouter();

    // states
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [broken, setBroken] = useState(false);

    useEffect(() => {
        // Check if 'window' is defined before accessing it
        if (typeof window !== 'undefined') {
            setBroken(window.matchMedia('(max-width: 800px)').matches);
        }
    }, []);

    return (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
            <Sidebar
                collapsed={collapsed}
                toggled={toggled}
                customBreakPoint="800px"
                onBreakPoint={setBroken}
                onBackdropClick={() => setCollapsed(false)}
                image="https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"
                className='h-screen !border-0'
                transitionDuration={500}
            >

                <div className='flex justify-center items-center h-[70px]'>
                    <Link href='/'>
                        <h1 className='text-primary text-[24px] font-medium'>
                            {!collapsed ? 'Shopping App' : 'SA'}
                        </h1>
                    </Link>
                </div>

                <Menu
                    menuItemStyles={{
                        button: ({ active, hover }) => {
                            let backgroundColor = 'inherit';
                            let color = 'black';

                            if (active || hover) {
                                backgroundColor = '#3B3060 !important';
                                color = 'white';
                            }

                            return {
                                backgroundColor,
                                color,
                            };
                        },
                    }}
                >
                    {dashboardMenuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            component={<Link href={item.to} />}
                            icon={item.icon}
                            active={
                                item.to === router.pathname
                                // ||
                                // item.to === '/user' && (location.pathname === '/user/add' || location.pathname.slice(0, 11) === '/user/edit/') ||
                                // item.to === '/item' && (location.pathname === '/item/add' || location.pathname.slice(0, 11) === '/item/edit/')
                            }
                        >
                            {item.text}
                        </MenuItem>
                    ))}
                </Menu>
            </Sidebar>

            <main className='w-full bg-gray-200'>
                <DashboardHeader
                    broken={broken}
                    toggled={toggled}
                    setToggled={setToggled}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />

                <div className='mt-8 px-10'>
                    {children}
                </div>

            </main>
        </div>
    )
}

export default DashboardLayout