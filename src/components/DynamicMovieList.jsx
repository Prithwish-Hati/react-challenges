import React from 'react';
import data from '../../movies.json';

const DynamicMovieList = () => {
    return (
        <section className='my-8 w-full'>
            <h2 className='text-3xl font-semibold'>🍿 Dynamic Movie List with Filtering and Sorting</h2>
            <p className='mt-4'>Develop a React application featuring a dynamic list of movies. Users should be able to:
                <ol className='list-inside list-decimal mt-2'>
                    <li>
                        View a list of movie titles with basic information like release year and rating.
                    </li>
                    <li>
                        Filter the list by genre, release year range, or rating range.
                    </li>
                    <li>
                        Sort the list by title, release year, or rating.
                    </li>
                    <li>
                        Click on a movie title to access its details (e.g., plot summary, director, cast).
                    </li>
                </ol>
                <div className='mt-4'>
                    <p className='text-lg font-medium'>Filters:</p>
                    <select>
                        {data.map(movie => (
                            movie.genre.map(g => (
                                    <option value={g}>{g}</option>
                                )
                            )))}
                    </select>
                </div>
                <div className='grid grid-cols-4 gap-6 mt-4'>
                    {data.map(movie => (
                        <div className='bg-my-yellow rounded-2xl shadow-lg p-8'>
                            <h5 className='text-2xl font-bold mb-4'>{movie.title}</h5>
                            <p><span className='font-bold'>Release Year: </span>{movie.release_year}</p>
                            <p><span className='font-bold'>Rating: </span>{movie.rating}</p>
                        </div>
                    ))}
                </div>
            </p>
            <p className='mt-4'></p>
        </section>
    )
}

export default DynamicMovieList