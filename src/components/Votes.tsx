import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/store';
import { Outlet } from 'react-router-dom';
import {fetchVotes} from '../redux/votesSlice';
import {voteType} from '../types';
import Button from './Button';


const Votes = () => {
    const dispatch = useAppDispatch();
    const {
        votes, isSuccess, isFetching,
    } = useAppSelector((state) => state.votes);

    useEffect(() => {
        dispatch(fetchVotes());
    }, [dispatch])

    return (
        <>
            <Outlet />
            {isFetching && <div> loading ...</div>}
            {isSuccess &&
            <div>
              <div className={"vote-item"}>
                  {votes.map((vote: voteType) => (
                      <div key={vote.id}>
                          <span>{vote.value}</span>
                          <span>{vote.image_id}</span>
                          <Button displayText={'Zobacz szczegóły'} redirect={`/votes/${vote.id}`}/>
                      </div>
                  ))}
              </div>
              <Outlet />
            </div>
            }
        </>
    )
}

export default Votes;