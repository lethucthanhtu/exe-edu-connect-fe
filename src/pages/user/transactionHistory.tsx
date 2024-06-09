import { useTranslation } from 'react-i18next';
import { capitalize } from '../../utils/utils';
import HistoryLayout from '../../components/layout/historyLayout';

const TABLE_HEAD = ['time', 'subject', 'lesson path', 'student', 'amount'];

/**
 * transactionsHistory page
 * @returns JSX.Element
 */
export default function TransactionsHistory() {
  const { t } = useTranslation();

  return (
    <>
      <HistoryLayout
        title={capitalize(t('transaction history'))}
        tableHead={TABLE_HEAD}
      />
    </>
  );
}
