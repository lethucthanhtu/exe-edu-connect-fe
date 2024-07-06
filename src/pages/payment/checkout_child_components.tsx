import { capitalize } from '../../utils/utils';
import { useTranslation } from 'react-i18next';
import { size } from '@material-tailwind/react/types/components/avatar';
import RatingStar from '../../components/ratingStar';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Chip,
    Avatar,
    Rating,
    IconButton,
    Typography,
    CardHeader,
} from '@material-tailwind/react';

/**
 * Checkout Details Section, contains teacher details, description, and customer's details. 
 * @returns JSX.Element
 */
export function CheckoutDetails() {
    const { t } = useTranslation();
    return (

        <Card className="w-96 h-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>

            <CardBody
                className=''
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>

                <Typography variant="h5" color="blue-gray" className="mb-2 text-center"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {capitalize(t("Thông tin khóa học đăng ký"))}
                </Typography>
                <div className="mt-5 px-2">
                    <BasicTeacherProfileSection />

                </div>
                <div className="mt-5 px-2">
                    <DetailedTeacherProfileSection />
                </div>
                <div className="mt-5 px-2">
                    <CourseChoiceSummary />
                </div>
            </CardBody>

        </Card>

    );
}


/**
 * Checkout Warning Notification. 
 * @returns JSX.Element
 */
export function CheckoutWarningNotification() {
    const { t } = useTranslation();
    return <Chip
        className="bg-primary text-center text-sm"
        value={capitalize(t('Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên website. Xin cảm ơn! '))}
        size="lg" />
}
/**
 * Contains a list of payment options. 
 * @returns JSX.Element
 */
export function PaymentOptions() {
    const { t } = useTranslation();
    return (
        <Card className="w-96"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>

            <CardBody
                className=''
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>

                <Typography variant="h5" color="blue-gray" className="mb-2 text-center"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}>
                    {capitalize(t("Từ nguồn tiền"))}
                </Typography>
                <BankList />
            </CardBody>

        </Card>
    )
}

/**
 * The QR section for customers to finish the payment. 
 * @returns JSX.Element
 */
export function QRSection() {
    const { t } = useTranslation();
    return (<Card className="mt-2 w-96"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}>

        <CardBody
            className=''
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>

            <Typography variant="h5" color="blue-gray" className="mb-2 text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                {t("Quét mã QR \n để thanh toán")}
            </Typography>
            <img
                className="h-36 w-36 my-5 mx-auto"
                src="https://firebasestorage.googleapis.com/v0/b/educonnectdb.appspot.com/o/qrcode_114505109_9889a306594a1e15645f5f69b3e4c7a8.png?alt=media&token=0e554a93-e542-455e-9b09-f23be72904fe"
                alt="nature image"
            />
            <Typography variant="paragraph" color="blue-gray" className="mb-1 text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                {t("Thanh toán trực tuyến")}
            </Typography>
            <Typography variant="h3" color="blue-gray" className="text-center"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
                {t("0.000.000 VNĐ")}
            </Typography>
            <div className='flex gap-1 justify-center mt-2'>
                <Typography
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Số tài khoản: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"1234 567 890"}
                </Typography>
            </div>
            <div className='flex gap-1 justify-center mt-2'>
                <Typography
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Chủ tài khoản: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"Đào Việt Anh"}
                </Typography>
            </div>
            <hr className="border-gray-300 my-4" />
            <Button
                className="bg-primary text-center text-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                fullWidth>{capitalize(t("Hủy"))}
            </Button>
        </CardBody>

    </Card>)
}
/**
 * The section displaying teacher's information. 
 * @returns JSX.Element
 */
function BasicTeacherProfileSection() {
    const { t } = useTranslation();
    return (
        <div className="flex">
            <Avatar placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                size="xxl"
                src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
            <div className='ms-3 mt-1 space-y-3'>
                <div className='flex gap-1'>
                    <Typography
                        variant='h5'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color='black'>
                        {capitalize(t("Gia sư: "))}
                    </Typography>
                    <Typography
                        className='leading-7'
                        variant='lead'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color='black'>
                        {"Đào Việt Anh"}
                    </Typography>
                </div>
                <div className='flex gap-1'>
                    <Typography
                        variant='h5'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color='black'>
                        {capitalize(t("Mã số: "))}
                    </Typography>
                    <Typography
                        className='leading-7'
                        variant='lead'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color='black'>
                        {"0000"}
                    </Typography>
                </div>
                <div className='flex gap-1 '>
                    <div className='material-symbols-outlined decoration-yellow-300 select-none leading-7'>
                        Star
                    </div>
                    <Typography
                        variant='lead'
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        color='black'>
                        {"4.5"}
                    </Typography>
                </div>

            </div>
        </div>

    )
}
/**
 * The section displaying teacher's information. 
 * @returns JSX.Element
 */
function DetailedTeacherProfileSection() {
    const { t } = useTranslation();
    return (<>
        <div className="space-y-3">
            <div className='flex gap-1'>
                <Typography
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Năm sinh: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"01/02/2003"}
                </Typography>
            </div>
            <div className='flex gap-1'>
                <Typography
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Hiện là: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"Sinh Viên"}
                </Typography>
            </div>
            <div className='flex gap-1'>
                <Typography
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Trường: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"Đại học FPT Hồ Chí Minh"}
                </Typography>
            </div>
            <div className='flex gap-1'>
                <Typography
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Chuyên ngành: "))}
                </Typography>
                <Typography
                    className='leading-7'
                    variant='paragraph'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {"Kĩ thuật phần mềm"}
                </Typography>
            </div>
        </div>
    </>)
}
/**
 * The section that shows the options. 
 * @returns JSX.Element
 */
function CourseChoiceSummary() {
    const { t } = useTranslation();
    return (<>
        <Typography
            className='leading-7'
            variant='paragraph'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color='black'>
            {"Bạn đã chọn"}
        </Typography>
        <div className="mt-2 space-y-3 ">
            <div className='flex justify-between'>
                <Typography
                    className='leading-9'
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Số điện thoại: "))}
                </Typography>
                <Chip
                    className="bg-primary text-center text-sm"
                    value={"0123 456 789"}
                    size="lg" />
            </div>
            <div className='flex justify-between'>
                <Typography
                    className='leading-9'
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Gói học: "))}
                </Typography>
                <Chip
                    className="bg-primary text-center text-sm"
                    value={"Theo tháng"}
                    size="lg" />
            </div>
            <div className='flex justify-between'>
                <Typography
                    className='leading-9'
                    variant='h6'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color='black'>
                    {capitalize(t("Thời gian học: "))}
                </Typography>
                <Chip
                    className="bg-primary text-center text-sm"
                    value={"Thứ 2,4,6, 19:00 - 21:00"}
                    size="lg" />
            </div>
        </div>
    </>)
}
/**
 * Shows up a list of banks. 
 * @returns JSX.Element
 */
function BankList() {
    return (
        <div className="flex gap-6">
            <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="flex items-center gap-3">
                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-BIDV-Transparent.png"
                    alt="bidv-logo" className="h-6 w-12" />

            </Button>
            <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="flex items-center gap-3">
                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Circle.png"
                    alt="bidv-logo" className="h-6 w-12" />

            </Button>
            <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="flex items-center gap-3">
                <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png"
                    alt="bidv-logo" className="h-6 w-12" />

            </Button>
        </div>
    )
}