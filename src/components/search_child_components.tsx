import {
    Typography, Input, ButtonGroup, Button, Card, CardHeader, CardBody,
    Select, Option

} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { capitalize } from "../utils/utils";
import Search from '../pages/search/search';
import { size } from '@material-tailwind/react/types/components/avatar';
import React, { useState, createElement, Fragment, useEffect, Dispatch, SetStateAction } from "react";
import { TCourse } from '../entity/course';
import { TCourseBriefDetails } from '../entity/courseBriefDetails'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { TCourseCategory } from "../entity/courseCategory";
import { useNavigate, useNavigationType } from "react-router-dom";
/**
 * The EDUCONNECT Search text.
 * @returns JSX.Element
 */
export function SearchTitle() {
    const { t } = useTranslation();
    return (
        <Typography
            variant="h1"
            textGradient
            className='bg-gradient-to-r from-teal-900 to-teal-300 '
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            {t("EDUCONNECT SEARCH")}
        </Typography>)
}

/**
 * The Course Search Bar.
 * @returns JSX.Element
 */
export function SearchBar() {
    const [keyword, setKeyword] = useState("");
    const onChange = ({ target }) => setKeyword(target.value);
    const { t } = useTranslation();
    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="email"
                label={t("Tìm kiếm khóa học/gia sư")}
                value={undefined}
                crossOrigin={undefined}
                onChange={onChange}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={keyword ? "gray" : "blue-gray"}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                disabled={!undefined}
                className="!absolute right-1 top-1 rounded"
            >
                < div className='material-symbols-outlined decoration-yellow-300 select-none leading-1' >
                    Search
                </div >
            </Button>
        </div >
    );
}


type TFilterBarProps = {
    courseCategoryChangeHandler: (category: string) => void;
}
/**
 * The Search Filter bar containing search filter options.
 * @returns JSX.Element
 */
export function FilterBar({ courseCategoryChangeHandler }: TFilterBarProps) {
    const { t } = useTranslation();
    const getAllCourseCategoriesUrl = 'https://exe-edu-connect-be-dev.onrender.com/api/course/categories';
    const searchCoursesPath = '/search'
    const [courseCategory, setCourseCategory] = useState("Select");
    const [courseCategories, setCourseCategories] = useState<TCourseCategory[]>([]);
    const [isFilterButtonDisabled, setIsFilterButtonDisabled] = useState(true)
    const navigator = useNavigate()
    useEffect(() => {
        try {
            axios
                .get(
                    getAllCourseCategoriesUrl
                )
                .then((res) => {
                    // eslint-disable-next-line no-console
                    console.log('Current result:', res);
                    setCourseCategories(res.data.returnData as TCourseCategory[])
                }).catch((error) => {
                    // eslint-disable-next-line no-console
                    console.log('Current error:', error);
                });
        } catch (error) {
            //Handle additional errors here 
        }
    }, []);
    const resetFilter = () => {
        navigator(searchCoursesPath)
        window.location.reload()
    }
    const invokeFilterFunctionInParentComponent = () => {
        courseCategoryChangeHandler(courseCategory)
    }
    const handleCourseChange = (val) => {
        setCourseCategory(val)
        if (val != null) setIsFilterButtonDisabled(false)
        else setIsFilterButtonDisabled(true)
    }


    return (
        <Card className="w-full max-w-[48rem] flex-row border-4 border-teal-800"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className='w-full'>
                <div className='grid grid-flow-col auto-cols-auto w-full items-center'>
                    <Typography variant="h4" className=" text-secondary-darkBlue leading-9 w-24 px-0 my-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        {t("Lọc theo")}
                    </Typography>
                    <div className='w-36 me-5'>
                        <Select label="Khóa học"
                            value={courseCategory}
                            onChange={handleCourseChange}
                            className="text-teal-800 font-bold text-md"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            {courseCategories.map((courseCategory) => (
                                <Option key={courseCategory.id}
                                    value={courseCategory.categoryname} >
                                    {courseCategory.categoryname}
                                </Option>
                            ))}

                        </Select>
                    </div>
                    <div className='w-36'>
                        <Select label="Tên giáo viên"
                            className="text-teal-600 font-bold text-md"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            <Option>Tăng dần</Option>
                            <Option>Giảm dần</Option>
                        </Select>
                    </div>

                    <ButtonGroup className='mx-10 w-20'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        <Button
                            className="bg-primary text-base min-w-16 px-0"
                            placeholder={undefined}
                            onClick={invokeFilterFunctionInParentComponent}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            disabled={isFilterButtonDisabled}
                        >{t("Lọc")}
                        </Button>
                        <Button
                            className="bg-red-800 text-base min-w-20 px-0"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onClick={resetFilter}
                            onPointerLeaveCapture={undefined}
                        >{capitalize(t("Đặt lại"))}
                        </Button>


                    </ButtonGroup>
                </div>

            </CardBody>
        </Card>
    )
}
/**
 * The Card containing Course Brief Details.
 * @returns JSX.Element
 */
export function BriefCourseDetailsCard(courseBriefDetails: TCourseBriefDetails) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const goToCourseDetailByCourseId = () => {
        const url = `/course/${courseBriefDetails.courseid}`
        navigate(url)
    }
    return (
        <Card className="w-full max-w-[48rem] flex-row"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            <CardHeader
                shadow={false}
                floated={false}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={courseBriefDetails.avatarUrl}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className='w-full'>
                <Typography variant="h4" className="mb-2 text-teal-800"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {courseBriefDetails.name}
                </Typography>
                <div className='flex'>
                    <Typography variant="h6" color="blue-gray" className="mb-2"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        {courseBriefDetails.teacherName}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2 ml-2"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>

                        {`( ${courseBriefDetails.rating}`}
                    </Typography>
                    <div className='material-symbols-outlined text-yellow-800 select-none leading-1' >
                        Star
                    </div>
                    <Typography variant="h6" color="blue-gray" className="mb-2"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        {')'}
                    </Typography>


                </div>
                <Typography color="gray" className="mb-8 font-normal"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {courseBriefDetails.description}
                </Typography>
                <a href="#" className="grid justify-items-end">
                    <Button variant="text" className="flex gap-2 text-teal-800"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        onClick={goToCourseDetailByCourseId}>
                        {t("Xem thêm")}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>

    )
}

