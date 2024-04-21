import {useState} from 'react'
import {useRouter} from 'next/router'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default ({action = '/search'}) => {
   const router = useRouter()
   const [query, setQuery] = useState('')

   const handleParam = setValue => e => setValue(e.target.value)

   const handleSubmit = preventDefault(() => {
     router.push({
       pathname: action,
       query: {'mvp_products[query]=': query},
     })
   })

   return (
      <form onSubmit={handleSubmit} className="navbar-search search-style-5">
        <div className="search-input">                    
              <div className='input-field'>
              <input
                placeholder="Search for products"
                type='text'
                name='q'
                value={query}
                onChange={handleParam(setQuery)}
                  aria-label='Search'
              />
              </div>                    
        </div>
        <div className="search-btn">
          <button>
            <i className="lni lni-search-alt" />
          </button>
        </div>
      </form>
   )
}