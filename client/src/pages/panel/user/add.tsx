import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CardLayout from "@/components/Layout/Dashboard/CardLayout";
import { userAddLink, userLink } from "@/config/constants/constants";
import AddUser from "@/views/admin/user/AddUser";

export default function AddUserPage() {
    return (
        <>

            <Breadcrumb
                title='Add User'
                getLinks={[
                    { url: userLink, text: 'Users', isActive: false },
                    { url: userAddLink, text: 'Add User', isActive: true },
                ]}
                nextPageText='View Users'
                nextPageLink={userLink}
            />

            <CardLayout title='Add User' isNotInitalized>
                <AddUser />
            </CardLayout>

        </>
    )
}
