import Head from 'next/head';
import { TextInput } from '@/components/ui/atoms';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Index</main>
      <div className="form-control relative">
        <label className="label">
          <span className="label-text">Pick a file</span>
        </label>
        <input type="text" placeholder="Search…" className={`input input-bordered bg-inputs-5 relative`} />
      </div>
      <div>
        <TextInput name="name" />
      </div>
    </div>
  );
}
