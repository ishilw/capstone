import { useApi } from '../apiContext'
import { AsyncView } from '../components/AsyncView'
import { CourseList } from '../components/CourseList'
import { useAsync } from '../hooks/useAsync'

export function CatalogPage() {
  const api = useApi()
  const result = useAsync(() => api.courses.list(), [api])
  return (
    <section>
      <h1>Course catalog</h1>
      <AsyncView
        result={result}
        isEmpty={(courses) => courses.length === 0}
        emptyMessage="No published courses yet."
      >
        {(courses) => <CourseList courses={courses} linkFor={(course) => `/courses/${course.id}`} />}
      </AsyncView>
    </section>
  )
}
