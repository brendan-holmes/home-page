import React from 'react';
import cn from 'classnames';

const Home = () => {
    return (
        <div className={cn(
            'flex justify-center flex-col', 
            'bg-blue-100', 
            'p-10', 
            'rounded-lg'
            )}>
            <p className='text-blue'>
                Hi, I'm Brendan, a software engineer in Melbourne, Australia. 
                
                I work at Xero which makes cloud-based accounting software. Specifically, I work on Xero Tax which is a tax website for accountants and book keepers. Every year, millions of tax returns are lodged to the Australian Tax Office every year using our website.
            </p>
            <p className='mt-5 text-blue'>I'm interested in all aspects of software development. Lately I've been learning a lot about how to maintain a high-availability cloud-based web application. The tech stack I'm most familiar with is .NET/C#, JavaScript and Typescript, SQL, AWS and Kubernetes.</p>
        </div>
    );
}

export default Home;