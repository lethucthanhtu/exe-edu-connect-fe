import { useState } from 'react';
import {
  Typography,
  Input,
  Button,
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  SwitchProps,
} from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils/utils';
import { InputEmail, InputPasswordGroupCheck } from '../../components/input';
import { FormHeader } from '../../components/form';

type TRoleRadioButtonProps = {
  className?: string;
};

/**
 * @deprecated
 *
 */
function RoleRadioButton({ className }: TRoleRadioButtonProps) {
  const { t } = useTranslation();
  return (
    <Card
      className={className}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <List
        className='flex-row'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-react'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                color='teal'
                id='horizontal-list-react'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </ListItemPrefix>
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('tutor'))}
            </Typography>
          </label>
        </ListItem>
        <ListItem
          className='p-0'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <label
            htmlFor='horizontal-list-vue'
            className='flex w-full cursor-pointer items-center px-3 py-2'
          >
            <ListItemPrefix
              className='mr-3'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Radio
                name='horizontal-list'
                defaultChecked
                color='teal'
                id='horizontal-list-vue'
                ripple={false}
                className='hover:before:opacity-0'
                containerProps={{
                  className: 'p-0',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                crossOrigin={undefined}
              />
            </ListItemPrefix>
            <Typography
              color='blue-gray'
              className='font-medium text-blue-gray-400'
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {capitalize(t('student'))}
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

/** */
function RoleSwitch({
  ...props
}: Omit<
  SwitchProps,
  'onPointerEnterCapture' | 'onPointerLeaveCapture' | 'crossOrigin'
>) {
  const { t } = useTranslation();
  return (
    <span className={`flex justify-center items-center gap-6 border rounded-lg py-1.5 px-4 shadow-xl border-blue-gray-200 ${props.className}`}>
      <Typography
        variant='paragraph'
        color={props.color || 'teal'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={undefined}
      >
        {capitalize(t('student'))}
      </Typography>
      <Switch
        {...props}
        color={props.color || 'teal'}
        // className={props.className}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
      />
      <Typography
        variant='paragraph'
        color={props.color || 'teal'}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        placeholder={undefined}
      >
        {capitalize(t('tutor'))}
      </Typography>
    </span>
  );
}

/**
 * sign up page
 * @returns JSX.Element
 */
export default function Signup() {
  const { t } = useTranslation();
  const [pwd, setPwd] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);

  const validatePwd = (pwd: string) => {
    const isValid =
      pwd.length >= 8 &&
      /[A-Z]/.test(pwd) && // Contains an uppercase letter
      /[a-z]/.test(pwd) && // Contains a lowercase letter
      /[0-9]/.test(pwd) && // Contains a number
      /[!@#$%^&*]/.test(pwd); // Contains a special character
    return isValid;
  };

  const handlePwdChange = (event) => {
    const newPwd = event.target.value;
    setPwd(newPwd);
    setIsPwdValid(validatePwd(newPwd));
  };

  return (
    <>
      <form
        action='#'
        className='size-full flex flex-col gap-4 justify-center items-center'
      >
        <FormHeader label='register new account' />
        <div className='flex flex-col md:flex-row w-full justify-center md:gap-4 items-center'>
          <Typography
            variant='paragraph'
            className='font-medium text-blue-gray-500'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {capitalize(t('your role'))}
          </Typography>
          {/* <RoleRadioButton className='w-3/4' /> */}
          <RoleSwitch name='role' className='' />
        </div>
        <Input
          required
          color='teal'
          type='text'
          label={capitalize(t('your name'))}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <InputEmail color='teal' />
        <InputPasswordGroupCheck color='teal' />
        <div className='mt-4 flex flex-col gap-6 w-full'>
          <Button
            variant='filled'
            className='bg-primary'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {t('sign up')}
          </Button>
          <Typography
            variant='paragraph'
            className='flex gap-1 w-full justify-center items-center'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {`${capitalize(t('have account'))}?`}
            <Link to='/login'>
              <Typography
                variant='paragraph'
                className='text-primary font-medium hover:underline underline-offset-2'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >{`${capitalize(t('sign in now'))}`}</Typography>
            </Link>
          </Typography>
        </div>
      </form>
    </>
  );
}
