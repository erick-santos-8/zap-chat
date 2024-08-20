import { Skeleton } from "@/components/ui/skeleton"


const SkeletonMessage = () => {
  return (
    <>
      <div className="flex justify-end mb-4">
        <Skeleton className="w-full max-w-xs p-4 bg-purple-300 text-white rounded-lg shadow-lg break-words" />
      </div>
      <div className="flex justify-start mb-4">
        <Skeleton className="w-full max-w-xs p-4 bg-lime-200 text-white rounded-lg shadow-lg break-words" />
      </div>
    </>
  )
}

export default SkeletonMessage