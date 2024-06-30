import { useTranslation } from 'react-i18next';
import HistoryLayout from '../../../components/layout/historyLayout';
import { capitalize } from '../../../utils/utils';

const TABLE_HEAD = ['subject', 'courses', 'lesson path', 'status', ''];

/**
 * Refund request page
 * @returns
 */
export default function RefundRequest() {
  const { t } = useTranslation();
  return (
    <>
      <HistoryLayout
        title={capitalize(t('refund request'))}
        tableHead={TABLE_HEAD}
      />
    </>
  );
}
