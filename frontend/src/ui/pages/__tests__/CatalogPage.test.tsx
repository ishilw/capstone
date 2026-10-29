import { screen } from '@testing-library/react'
import { ApiError } from '../../../api/http'
import { makeApi, renderWithApp } from '../../__tests__/renderWithApp'
import { makeCourse } from '../../__tests__/fixtures'
import { CatalogPage } from '../CatalogPage'

describe('CatalogPage', () => {
  it('shows a loading status first', () => {
    const list = vi.fn().mockReturnValue(new Promise(() => {}))
    renderWithApp(<CatalogPage />, { api: makeApi({ courses: { list } }) })
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i)
  })

  it('lists published courses with links to their details', async () => {
    const list = vi.fn().mockResolvedValue([makeCourse(), makeCourse({ id: 2, title: 'Algebra' })])
    renderWithApp(<CatalogPage />, { api: makeApi({ courses: { list } }) })
    const link = await screen.findByRole('link', { name: 'Intro to Python' })
    expect(link).toHaveAttribute('href', '#/courses/1')
    expect(screen.getByRole('link', { name: 'Algebra' })).toBeInTheDocument()
  })

  it('shows an empty message', async () => {
    renderWithApp(<CatalogPage />, { api: makeApi({ courses: { list: vi.fn().mockResolvedValue([]) } }) })
    expect(await screen.findByText(/no published courses/i)).toBeInTheDocument()
  })

  it('shows the error from the server', async () => {
    const list = vi.fn().mockRejectedValue(new ApiError(401, 'unknown user'))
    renderWithApp(<CatalogPage />, { api: makeApi({ courses: { list } }) })
    expect(await screen.findByRole('alert')).toHaveTextContent('unknown user')
  })
})
