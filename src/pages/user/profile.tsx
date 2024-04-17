import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

/**
 * profile page
 * @returns JSX.Element
 */
export default function Profile() {
    // const [ck, setCK] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(
                'https://wifeed.vn/api/thong-tin-co-phieu/danh-sach-ma-chung-khoan',
                {
                    params: {
                        loaidn: 1,
                        san: 'HOSE',
                    },
                }
            )
            .then((res) => {
                // setCK(res.data);
                // eslint-disable-next-line no-console
                console.log(res.data);
            });
    }, []);

    return (
        <>
            <div className='flex justify-center'>
                <span className='text-6xl capitalize'>Profile {id}</span>
            </div>
        </>
    );
}
