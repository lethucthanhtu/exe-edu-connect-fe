import { Card, Typography } from '@material-tailwind/react';

/**
 * transactionsHistory page
 * @returns JSX.Element
 */

const TABLE_HEAD = ['Time', 'Subject', 'Type', 'Student', 'Received', 'Amount'];

export default function TransactionsHistory() {
    return (
        <>
            <Card className='h-full w-full overflow-scroll'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}>
            <table className='w-full min-w-max table-auto text-left'>
                <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                    <th
                        key={head}
                        className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                    >
                        <Typography
                                variant='small'
                                color='blue-gray'
                                className='font-normal leading-none opacity-70'
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}                        >
                        {head}
                        </Typography>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {TABLE_ROWS.map(({ name, job, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                    return (
                    <tr key={name}>
                        <td className={classes}>
                        <Typography
                                    variant='small'
                                    color='blue-gray'
                                    className='font-normal'
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}                        >
                            {name}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                                    variant='small'
                                    color='blue-gray'
                                    className='font-normal'
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}                        >
                            {job}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                                    variant='small'
                                    color='blue-gray'
                                    className='font-normal'
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}                        >
                            {date}
                        </Typography>
                        </td>
                        <td className={classes}>
                        <Typography
                                    as='a'
                                    href='#'
                                    variant='small'
                                    color='blue-gray'
                                    className='font-medium'
                                    placeholder={undefined}
                                    onPointerEnterCapture={undefined}
                                    onPointerLeaveCapture={undefined}                        >
                            Edit
                        </Typography>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </Card>
        </>
    );
}
