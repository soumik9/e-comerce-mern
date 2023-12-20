import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { userAddLink, userLink } from "@/config/constants/constants";

export default function UserPage() {
    return (
        <main>

            <Breadcrumb
                title='Users'
                getLinks={[
                    { url: userLink, text: 'Users', isActive: true }
                ]}
                nextPageText='Create User'
                nextPageLink={userAddLink}
            />

        </main>
    )
}
