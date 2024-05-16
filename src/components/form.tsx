import { Typography, TypographyProps } from "@material-tailwind/react";
import { capitalize } from "../utils/utils";
import { useTranslation } from "react-i18next";

type TFormHeaderProps = {
  label: string;
} & Omit<
  TypographyProps,
  | 'variant'
  | 'children'
  | 'color'
  | 'className'
  | 'placeholder'
  | 'onPointerEnterCapture'
  | 'onPointerLeaveCapture'
>;

/** */
export function FormHeader({ label, ...props }: TFormHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        {...props}
        variant='h3'
        color='teal'
        className='mb-4'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {capitalize(t(label))}
      </Typography>
    </>
  );
}
