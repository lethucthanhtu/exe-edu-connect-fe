import {
    Typography, Input, Button, Card, CardHeader, CardBody,
    Select, Option

} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { capitalize } from "../utils/utils";
import Search from '../pages/search/search';
import { size } from '@material-tailwind/react/types/components/avatar';
import { useState, createElement, Fragment } from "react";
import { TCourse } from '../entity/course';
import { TCourseBriefDetails } from '../entity/courseBriefDetails'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
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

/**
 * The Search Filter bar containing search filter options.
 * @returns JSX.Element
 */
export function FilterBar() {
    const { t } = useTranslation();
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
                <div className='flex w-full justify-items-stretch items-center'>
                    <Typography variant="h4" className="mx-2 text-secondary-darkBlue leading-9 w-32 px-0 my-0"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}>
                        {t("Lọc theo")}
                    </Typography>
                    <div className='mx-10 w-32'>
                        <Select label="Khóa học"
                            className="text-teal-800 font-bold text-md"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            <Option>Toán</Option>
                            <Option>Vật Lý</Option>
                            <Option>Tiếng Anh</Option>
                        </Select>
                    </div>
                    <div className='mx-10 w-32'>
                        <Select label="Tên giáo viên"
                            className="text-teal-600 font-bold text-md"
                            placeholder={undefined}
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}>
                            <Option>Tăng dần</Option>
                            <Option>Giảm dần</Option>
                        </Select>
                    </div>
                    <div className='mx-9 w-36 justify-end'>
                        <Button
                            className="bg-primary text-center text-sm"
                            placeholder={undefined}
                            size="md"
                            onPointerEnterCapture={undefined}
                            onPointerLeaveCapture={undefined}
                            fullWidth>{capitalize(t("Bắt đầu"))}
                        </Button>
                    </div>
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
                        onPointerLeaveCapture={undefined}>
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

