import React from 'react';

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
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.id}</td>
            <td className='px-4 py-3'>{item.title}</td>
            <td className='px-4 py-3'>{item.check}</td>
            <td className='px-4 py-3'>{item.schedule}</td>
            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                <i class="far fa-edit"></i></td>
            <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
                <i class="far fa-trash-alt"></i></td>
        </tr>
        </>
    )
};

export default Td;