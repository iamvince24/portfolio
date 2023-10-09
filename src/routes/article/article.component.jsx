import React from "react";
import { Fragment } from 'react';

import Bar from "../bar/bar.component";
import './article.component.styles.scss';

function Article(){
    return(
        <div >
            <Bar 
                barName={'Blog'} 
                barClassName={['All', 'Javascript', 'React', 'CSS']}
            />
            <div className="articleVerson">
                <div className="articleContentAll">
                    <div className="title">Compound components - React</div>
                    <div className="introdction">Hello everyone, my name is Vince. I am an avid adventurer and a passionate storyteller. From a young age, I've been enchanted by the world's mysteries and cultures.</div>
                    <div className="time"><b>Vince Guo</b> · Aug 4, 2023</div>
                    <article className="articleContent">But, first, what are cold and warm lambdas? A cold lambda is a lambda that hasn’t been loaded into the execution environment, this is typically because it has either not been invoked before or hasn’t been invoked for a significant period. This means when we go to invoke a cold lambda, AWS needs to set up the resources and infrastructure required to execute the function and it’s this setup that causes an increase in latency and response time.

                    It’s also worth remembering that the setup time can vary from function to function for several reasons but two of the most consequential reasons are the size and complexity of a function. More complicated lambdas that use more resources will take longer to set up and can often have setup times of multiple seconds. This might not seem a long time but for applications that require near-instantaneous responses like APIs, a few seconds is unacceptable.
                    
                    So, now, we know what a cold lambda is, what about a warm one? A warm lambda is a lambda function that is already present in the execution environment because it’s either been executed recently or it receives frequent invocations. This means when we invoke a warm function, AWS doesn’t need to set up any new resources or infrastructure because it’s already in place from a previous invocation, this means we get a (typically) much lower latency and faster response time.
                    
                    At this point, you might be asking how can I keep my lambda’s warm then. To which I’ll respond, there are a few ways you can keep a lambda warm but the one we’ll be focusing on in this tutorial is a technique called pre-warming. This is where we use recurring requests to invoke our lambda function to keep it in the execution environment and therefore warm. We’ll perform the pre-warming by using an EventBridge rule on a cron job that is set to trigger our function every 5 minutes.

                    But, first, what are cold and warm lambdas? A cold lambda is a lambda that hasn’t been loaded into the execution environment, this is typically because it has either not been invoked before or hasn’t been invoked for a significant period. This means when we go to invoke a cold lambda, AWS needs to set up the resources and infrastructure required to execute the function and it’s this setup that causes an increase in latency and response time.

                    It’s also worth remembering that the setup time can vary from function to function for several reasons but two of the most consequential reasons are the size and complexity of a function. More complicated lambdas that use more resources will take longer to set up and can often have setup times of multiple seconds. This might not seem a long time but for applications that require near-instantaneous responses like APIs, a few seconds is unacceptable.
                    
                    So, now, we know what a cold lambda is, what about a warm one? A warm lambda is a lambda function that is already present in the execution environment because it’s either been executed recently or it receives frequent invocations. This means when we invoke a warm function, AWS doesn’t need to set up any new resources or infrastructure because it’s already in place from a previous invocation, this means we get a (typically) much lower latency and faster response time.
                    
                    At this point, you might be asking how can I keep my lambda’s warm then. To which I’ll respond, there are a few ways you can keep a lambda warm but the one we’ll be focusing on in this tutorial is a technique called pre-warming. This is where we use recurring requests to invoke our lambda function to keep it in the execution environment and therefore warm. We’ll perform the pre-warming by using an EventBridge rule on a cron job that is set to trigger our function every 5 minutes.
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Article;