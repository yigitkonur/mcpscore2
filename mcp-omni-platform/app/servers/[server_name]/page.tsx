'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useServerDetailStore } from '@/store/server-detail-store';

export default function ServerDetailPage() {
  const params = useParams<{ server_name: string }>();
  const { serverData, isLoading, fetchServerData } = useServerDetailStore();

  useEffect(() => {
    if (params?.server_name) {
      fetchServerData(params.server_name, true);
    }
  }, [params?.server_name, fetchServerData]);

  if (isLoading || !serverData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{serverData.displayName}</h1>
      <p>{serverData.description}</p>
    </div>
  );
}
