import { RiRestartLine } from "react-icons/ri";
import { useAuth } from "../../hooks/Auth";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const LogsTable = () => {
  const { user } = useAuth();
  const name = user?.user_metadata?.name
    ? `${user?.user_metadata?.name}`
    : "No-name";

  const mockLogs = [
    {
      id: "27ygtr8ik7",
      status: "processing",
      name: name,
    },
    {
      id: "895g6783fc",
      status: "processed",
      name: name,
    },
    {
      id: "08ht48ufv7",
      status: "processed",
      name: name,
    },
  ];
  return (
    <div className="flex flex-col gap-4 mt-8">
      <h1 className="font-medium text-xl p-4 pb-0 mt-6 text-center">Logs</h1>
      <Table className="border-t rounded-md">
        <TableCaption>A list of your recent logs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25%] text-left">ID</TableHead>
            <TableHead className="w-[25%] text-center">File Status</TableHead>
            <TableHead className="w-[25%] text-center">Triggered By</TableHead>
            <TableHead className="w-[25%] text-right">Re-trigger</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLogs.map((log, _i) => (
            <TableRow key={_i}>
              <TableCell className="font-medium">{log.id}</TableCell>
              <TableCell className="capitalize text-center">
                {log.status}
              </TableCell>
              <TableCell className="capitalize text-center">{name}</TableCell>
              <TableCell className="text-right flex justify-end items-center">
                <RiRestartLine className="w-6 h-6 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LogsTable;
