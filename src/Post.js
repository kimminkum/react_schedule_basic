import React, { useState } from 'react';

//추가하기 관련 add 

const Post = ({onSaveData}) => {
    const [form, setForm] = useState({
        title: '',
        check: '',
        schedule: '',
    });

    // const handleChange = (e) => {
    //     const {title, value} = e.target;
    //     setForm({
    //         ...form,
    //         [title]: value,
    //     })
    // };

    function handleChange(e) {
        console.log(e.target.value); //이렇게!
        setForm((prevFormData) => {
        return {
            ...form,
            [e.target.name]: e.target.value,
        };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form)
        console.log(form);
        setForm({ //초기화
            title: '',
            check: '',
            schedule: '',
        })
    }

    return (
        <>
            <div className='text-xl font-bold mt-5 mb-2 textcenter'>일정 추가하기</div>
            <form className='mt-3' onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="usertitle" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">Title
                        <input className='w-full py-3 px-1 mt-1 
                        text-gray-800 appearance-none 
                        border-2 border-gray-100 
                        focus:text-gray-500 focus:outline-none focus:border-gray-200'
                            required placeholder='일정 제목을 입력해주세요' type='text' name='title' 
                            value={form.title} onChange={handleChange} />
                    </label>
                    <label htmlFor='check' className='w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase'>Check
                        {/* <input className='w-full py-3 px-1 mt-1 
                        text-gray-800 appearance-none 
                        border-2 border-gray-100 
                        focus:text-gray-500 focus:outline-none focus:border-gray-200'
                            required placeholder='체크 여부' type='radio' name='check' 
                            value={form.check} onChange={handleChange} /> */}
                        <input required placeholder='체크 여부' type='radio' name='check' value={form.check} onChange={handleChange}  />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row">
                    <label htmlFor="schedule" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">Schedule
                        <input className='w-full py-3 px-1 mt-1 
                        text-gray-800 appearance-none 
                        border-2 border-gray-100 
                        focus:text-gray-500 focus:outline-none focus:border-gray-200'
                            required placeholder='상세 내용을 적어주세요' type='text' name='schedule' 
                            value={form.schedule} onChange={handleChange} />
                    </label>
                    {/* <label htmlFor="website" className="w-full flex-1 mx-2 text-xs font-semibold 
                    text-gray-600 uppercase">Website
                        <input className='w-full py-3 px-1 mt-1 
                        text-gray-800 appearance-none 
                        border-2 border-gray-100 
                        focus:text-gray-500 focus:outline-none focus:border-gray-200'
                            required placeholder='사이트 주소를 입력해주세요' type='text' name='website' 
                            value={form.website} onChange={handleChange} />
                    </label> */}
                </div>
                <div className='text-center'>
                    <button className='bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white 
                    rounded text-xl md:text-base mt-4' type='submit'>저장</button>
                </div>
            </form>
        </>
    )
}

export default Post;