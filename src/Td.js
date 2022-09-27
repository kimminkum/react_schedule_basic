import React from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

//삭제 관련 같은데 삭제하면 에러남

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }
    const onEdit = () => {
        handleEdit(item);
    }
    return (
        <>
        <tr className='"bg-white border-y-2 border-gray-200'>
            {/* <td className='px-4 py-3'>{item.id}</td> */}
            <td className='text-center px-4 py-3 border-r-2 border-gray-100 w-20'>{item.title}</td>
            <td className='text-center px-4 py-3 border-r-2 border-gray-100 w-20'><input type='checkbox' /></td>
            <td className='text-center px-4 py-3 border-r-2 border-gray-100 w-80'>{item.schedule}</td>
            <td onClick={onEdit} className='text-center text-gray-600 
            cursor-pointer show-modal border-r-2 border-gray-100 w-5'>
            <button className='bg-green-400 py-1 text-center px-5 md:px-6 md:py-2 text-white 
                    rounded text-xl md:text-base' type='submit'>수정</button></td>
            <td onClick={onRemove} className='text-center text-gray-600 cursor-pointer w-5
            items-center'>
            <button className='bg-red-400 py-1 text-center px-5 md:px-6 md:py-2 text-white 
                    rounded text-xl md:text-base' type='submit'>삭제</button></td>
        </tr>
        </>
    )
};

export default Td;