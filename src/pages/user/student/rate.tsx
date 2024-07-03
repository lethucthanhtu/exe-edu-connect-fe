import { useTranslation } from 'react-i18next';
import { capitalize } from '../../../utils/utils';
import HistoryLayout from '../../../components/layout/historyLayout';

const TABLE_HEAD = ['subject', 'courses', 'lesson path', 'status', ''];

/**
 * Rate page
 * @returns
 */
export default function Rate() {
  const { t } = useTranslation();
  return (
    <>
      <HistoryLayout
        title={capitalize(t('rate'))}
        tableHead={TABLE_HEAD}
      />
    </>
  );
}
