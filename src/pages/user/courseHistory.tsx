import HistoryLayout from '../../components/layout/historyLayout';

const TABLE_HEAD = ['subject', 'student', 'schedule', 'status', ''];

/**
 * Courses History page
 * @returns
 */
export default function CoursesHistory() {
  return (
    <>
      <HistoryLayout
        title='course history'
        tableHead={TABLE_HEAD} />
    </>
  );
}
