import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  CardHeader,
  CardBody,
  Avatar,
  Button,
  Collapse,
  IconButton,
} from '@material-tailwind/react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { capitalize, currencyFormat } from '../../utils/utils';
import LanguageButton from '../language.button';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { TUser } from '../../entity/user';
import NotFound from '../../pages/error/notFound';
import Loading from '../loading';
import { CURR_USER_DATA_URL, DEFAULT_IMG } from '../../utils/config';

type TUserProps = {
  role: string;
  user?: TUser;
  isCUserProfile?: boolean;
  loading?: boolean;
  collapse?: boolean;
  setCollapse: Dispatch<SetStateAction<boolean>>;
};

/** */
function User({
  user,
  role,
  isCUserProfile = false,
}: Omit<TUserProps, 'collapse' | 'setCollapse'>) {
  return (
    <>
      <Card
        color='transparent'
        shadow={false}
        className='w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center gap-4 pt-0 pb-8'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='basis-2/5 aspect-square relative'>
            <Avatar
              size='xl'
              variant='circular'
              src={user.avatarurl || DEFAULT_IMG}
              alt='some avatar picture'
              className='!size-full border border-gray-700'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            {isCUserProfile && (
              <Button
                // variant='text'
                className='!absolute !bottom-0 !right-0 size-[5%] rounded-full p-3 text-white bg-secondary-midBlue border-white border-2 flex justify-center items-center'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 absolute'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                  />
                </svg>
              </Button>
            )}
          </div>
          <div className='flex basis-3/5 w-full flex-col gap-0.5'>
            <div className='flex items-center justify-between capitalize'>
              <Typography
                variant='h6'
                color='blue-gray'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {user.fullname}
              </Typography>
            </div>
            <Typography
              color='blue-gray'
              className='capitalize'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {role}
            </Typography>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

/** */
function UserSkeleton() {
  return (
    <>
      <Card
        color='transparent'
        shadow={false}
        className='w-full'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center gap-4 pt-0 pb-8'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className='basis-2/5 aspect-square relative'>
            <Avatar
              size='xl'
              variant='circular'
              src='https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700594-stock-illustration-person-gray-photo-placeholder-man.jpg'
              alt='tania andrew'
              className='!size-full'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            {/* <Button
              // variant='text'
              className='!absolute !bottom-0 !right-0 size-[5%] rounded-full p-3 text-white bg-secondary-midBlue border-white border-2 flex justify-center items-center'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                />
              </svg>
            </Button> */}
          </div>
          <div className='flex basis-3/5 w-full flex-col gap-4 animate-pulse'>
            <div className='flex items-center justify-between capitalize'>
              <Typography
                as='div'
                variant='h6'
                color='blue-gray'
                className='"mb-4 h-3 w-full rounded-full bg-gray-300'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                &nbsp;
              </Typography>
            </div>
            <Typography
              as='div'
              color='blue-gray'
              className='capitalize mb-2 h-2 w-1/2 rounded-full bg-gray-300'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              &nbsp;
            </Typography>
          </div>
        </CardHeader>
        {/* <CardBody
          className='mb-6 p-0 flex flex-col gap-2'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant='paragraph'
            className='flex gap-2 items-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <span>Ballance</span>
            <Chip
              value={`${currencyFormat(0)}`}
              className='w-full flex justify-center bg-primary'
            />
          </Typography>
          <div className='flex gap-2'>
            <Button
              variant='filled'
              size='sm'
              className='w-full bg-primary-sub'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Deposit
            </Button>
            <Button
              variant='outlined'
              size='sm'
              className='w-full border-primary-sub text-primary-sub'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Withdraw
            </Button>
          </div>
        </CardBody> */}
      </Card>
    </>
  );
}

/** */
function Sidebar({
  user,
  role,
  loading,
  isCUserProfile,
  collapse = false,
  setCollapse,
}: TUserProps) {
  const { t } = useTranslation();
  const { id } = useParams();
  const [open, setOpen] = useState(0);
  // const [collapse, setCollapse] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Card
      className={`min-h-full md:w-1/5 p-4 shadow-xl border-r-4 ${
        collapse && 'hidden'
      }`}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className='mb-2 p-4 flex justify-center items-center'>
        {loading ? (
          <UserSkeleton />
        ) : (
          <div className='flex flex-col'>
            <IconButton
              onClick={() => setCollapse(!collapse)}
              variant='text'
              className='md:hidden mr-auto size-2 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='material-symbols-outlined size-2'>
                arrow_back_ios
              </span>
            </IconButton>
            <User user={user} role={role} isCUserProfile={isCUserProfile} />
          </div>
        )}
      </div>
      <hr className='mb-2 border-blue-gray-50' />
      <List
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to={`${id}/profile`}>
          <ListItem
            className='hover:bg-primary-light'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ListItemPrefix
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className='material-symbols-outlined'>account_circle</span>
            </ListItemPrefix>
            {capitalize(t('profile'))}
          </ListItem>
        </Link>
        {isCUserProfile && (
          <>
            <Link to={`${id}/schedule`}>
              <ListItem
                className='hover:bg-primary-light'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItemPrefix
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined'>
                    calendar_month
                  </span>
                </ListItemPrefix>
                {capitalize(t('your schedule'))}
              </ListItem>
            </Link>
            <hr className='my-2 border-blue-gray-50' />

            <Accordion
              open={open === 1}
              icon={
                <span
                  className={`material-symbols-outlined mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? 'rotate-90' : ''
                  }`}
                >
                  keyboard_arrow_right
                </span>
              }
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ListItem
                className='p-0'
                selected={open === 1}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className='border-b-0 p-3'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <span className='material-symbols-outlined'>
                      transition_push
                    </span>
                  </ListItemPrefix>
                  <Typography
                    color='blue-gray'
                    className='mr-auto font-normal'
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {capitalize(t('history'))}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className='py-1'>
                <List
                  className='p-0'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <Link to={`${id}/courseshistory`}>
                    <ListItem
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <span className='material-symbols-outlined'>
                          chevron_right
                        </span>
                      </ListItemPrefix>
                      {capitalize(t('courses'))}
                    </ListItem>
                  </Link>
                  <Link to={`${id}/transactionshistory`}>
                    <ListItem
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <ListItemPrefix
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <span className='material-symbols-outlined'>
                          chevron_right
                        </span>{' '}
                      </ListItemPrefix>
                      {capitalize(t('transactions'))}
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className='my-2 border-blue-gray-50' />
          </>
        )}

        {role === 'student' ? (
          <>
            <Link to={`${id}/rate`}>
              <ListItem
                className='hover:bg-primary-light'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItemPrefix
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined'>star_half</span>
                </ListItemPrefix>
                {capitalize(t('rate'))}
              </ListItem>
            </Link>
            <Link to={`${id}/refundrequest`}>
              <ListItem
                className='hover:bg-primary-light'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItemPrefix
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined'>
                    request_page
                  </span>
                </ListItemPrefix>
                {capitalize(t('refund request'))}
              </ListItem>
            </Link>
          </>
        ) : (
          // <NotFound/>
          <>
            <Link to={`/course/create`}>
              <ListItem
                className='hover:bg-primary-light'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItemPrefix
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined'>post_add</span>
                </ListItemPrefix>
                {capitalize(t('create course'))}
              </ListItem>
            </Link>
            <Link to={`${id}/tutor/courses`}>
              <ListItem
                className='hover:bg-primary-light'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <ListItemPrefix
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined'>school</span>
                </ListItemPrefix>
                {capitalize(t('your course'))}
              </ListItem>
            </Link>
            {role.toLowerCase() === 'admin' && (
              <Link to={`/admin/dashboard`}>
                <ListItem
                  className='hover:bg-primary-light'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <span className='material-symbols-outlined'>
                      space_dashboard
                    </span>
                  </ListItemPrefix>
                  {capitalize(t('dashboard'))}
                </ListItem>
              </Link>
            )}
          </>
        )}
      </List>
      <List
        className='h-full flex flex-col justify-end'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {isCUserProfile && (
          <Link to={`${id}/resetpassword`}>
            <ListItem
              className='hover:bg-primary-light'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <ListItemPrefix
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <span className='material-symbols-outlined'>settings</span>{' '}
              </ListItemPrefix>
              {capitalize(t('change password'))}
            </ListItem>
          </Link>
        )}
        <hr />
        <LanguageButton className='mt-8' />
      </List>
    </Card>
  );
}

const GET_CURR_USER_DATA_URL = `api/users/user`;

/**
 * UserLayout Component
 * @returns
 */
export default function UserLayout() {
  const [user, setUser] = useState<TUser>();
  const [isCUserProfile, setIsCUserProfile] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/api/users/${id}`)
      .then((res) => {
        const usr = res.data.returnData;
        setUser(usr);
        navigate(`${id}/profile`);
        return usr;
      })
      .then(
        (usr) =>
          localStorage.getItem('token') &&
          api.get(GET_CURR_USER_DATA_URL).then((res) => {
            const cUsr = res.data.returnData;
            setIsCUserProfile(usr.id === cUsr.id);
          })
      )
      .catch((err) => setErrMsg(err))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  return (
    <>
      <section className='flex size-full xs:flex-col md:!flex-row'>
        {
          // !loading ? (
          user ? (
            <>
              <Sidebar
                user={user}
                role={
                  user.authorities
                    ? user.authorities[0]?.authority
                    : 'not found'
                }
                isCUserProfile={isCUserProfile}
                loading={loading}
                collapse={collapse}
                setCollapse={setCollapse}
              />
              <div className={`size-full md:block `}>
                <IconButton
                  onClick={() => setCollapse(!collapse)}
                  variant='text'
                  className={`${
                    !collapse && 'xs:hidden'
                  } md:hidden mr-auto size-2 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent`}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <span className='material-symbols-outlined size-2'>
                    arrow_forward_ios
                  </span>
                </IconButton>
                <Outlet context={{ isCUserProfile, user }} />
              </div>
            </>
          ) : (
            <NotFound />
          )
          // ) : (
          //   <Loading middle />
          // )
        }
      </section>
    </>
  );
}
