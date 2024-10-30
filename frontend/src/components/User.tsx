import {UserType} from "@shared/types"

const User = ({ id, name, email, createdAt, updatedAt} : UserType) => {
    return (
        <div className="px-3 py-2 flex flex-col w-full border rounded m-2">
            <h1 className="text-violet-500 text-2xl">Name: {name}</h1>
            <p className="text-gray-800 font-mono">Email: {email}</p>
            <p className="mt-1 text-gray-600">CreatedAt: {createdAt}</p>
            <p className="text-gray-600">UpdatedAt: {updatedAt}</p>

            <div className="mt-3 p-2 bg-gray-600 border rounded">
                <span className="text-gray-200 text-pretty">ID: {id}</span>
            </div>
        </div>
    );
};

export default User;