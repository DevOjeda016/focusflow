import { Skeleton } from "@heroui/react";

interface SkeletonTaskProps {
  priority?: boolean;
}

const SkeletonTask = ({ priority = false }: SkeletonTaskProps) => {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-5 w-5 shrink-0 rounded-lg" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-4/5 rounded" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-3 w-1/3 rounded" />
            {priority && (
              <Skeleton className="h-5 w-1/3 rounded-full" />
            )}
          </div>
        </div>
        <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />
      </div>
    </div>
  )
}

export default SkeletonTask
