import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import Footer from './Footer';
import UserProfile from './UserProfile';
import SuggestionsHeader from './SuggestionsHeader';
import SuggestionItem from './SuggestionItem';

const Aside = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const { user } = useAppSelector((state) => state.user);

  const users = [...new Set(posts.map((user) => user.user.username))];

  return (
    <aside className="w-[300px] h-[518px] pt-[30px]">
      <UserProfile user={user} />
      <SuggestionsHeader />
      <div className="flex flex-col gap-3">
        {users
          .filter((admin) => admin !== user.username)
          .map((user, index) => (
            <SuggestionItem key={index} user={user} />
          ))}
      </div>
      <Footer />
    </aside>
  );
};

export default Aside;
