import {startOfMonth, endOfMonth, differenceInDays, sub, format, add, setDate} from 'date-fns';
import Cell from  "./Cell";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
interface Props {
  value?: Date;
  onChange?: (value: Date) => void;
}
const Calender: React.FC<Props> = ({value = new Date(), onChange}) => {
  // const startDate = new Date(value?.getFullYear(), value?.getMonth(), 1);
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();
  const prevMonth = () => onChange && onChange(sub(value , {months: 1}));
  const nextMonth = () => onChange && onChange(add(value , {months: 1}));
  const prevYear = () => onChange && onChange(sub(value , {years: 1}));
  const nextYear = () => onChange && onChange(add(value , {years: 1}));
  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  }
  return (
    <div className="w-[400px] h-16 border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell onClick={prevYear}>{"<<"}</Cell>
        <Cell onClick={prevMonth}>{"<"}</Cell>
        <Cell className="col-span-3">{format(value, "LLLL yyyy")}</Cell>
        <Cell onClick={nextMonth}>{">"}</Cell>
        <Cell onClick={nextYear}>{">>"}</Cell>

        {daysOfWeek.map((day) => (<Cell  key={day}className="text-sm font-bold">{day}</Cell>))}

        {Array.from({length: prefixDays}).map((_, index) => <Cell key={index}></Cell>)}

        {Array.from({length: numDays}).map((_, index) => {
          const date = index +1;
          const isCurrentDate = date === value.getDate ();
          return <Cell isActive={isCurrentDate}onClick={() =>handleClickDate(date)}key={date}>{date}</Cell>
        })}
        {Array.from({length: suffixDays}).map((_, index) => <Cell key={index}></Cell>)}
      </div>
    </div>
  )
};
export default Calender;