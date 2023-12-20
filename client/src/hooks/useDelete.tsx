import Swal from 'sweetalert2';

const useDelete = () => {

    const sendDeleteRequest = async (id: string | undefined, deleteItem: any) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteItem(id)
            }
        })
    }

    return { sendDeleteRequest };
}

export default useDelete;