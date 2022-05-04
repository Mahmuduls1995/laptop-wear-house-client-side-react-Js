import React from 'react';

const Blogs = () => {
    return (
        <div className="">
        <h2 class="bg-gradient text-center text-info my-4">Question and Answer</h2>
        <div class="container mx-auto my-4">
            <div class="accordion" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Question:What Difference between javascript and nodejs ?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>JavaScript:</strong> is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.
                            <li>Can only be run in the browsers
                            </li>
                            <li>Used on the client-side
                            </li>
                            <li>It determines whether user is what he claims to be
                            </li>
                           
                            <strong>NodeJs:</strong> is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript. 
                            <li>Can be run outside the browser</li>
                            <li>Used on the server-side.</li>
                            <li>Does not have the capability to add HTML tags</li>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Question:  When should you use nodejs and when should you use mongodb ?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Node.js is a Javascript runtime environment </strong> 
                            <li><strong>API Application</strong> Node.js is also a great choice for constructing an API application with both relational and non-relational databases.</li>
                            <li><strong>Real-time applications</strong> Due to the event-driven and asynchronous nature, Node.js is good at building real-time applications like messaging, notifications delivery, live streaming and collaboration tools.</li>
                            <li><strong>Microservices</strong> Apart from that, Node can also be used to build microservices — an architectural approach based on building an application as a collection of small services. Each microservice has its own data model and manages its own data.</li>
                                <br />
                            <strong>MongoDB is basically an Open Source cross platform document oriented DB program, often classified as NoSQL DB program. What it means is that instead of the traditional table based RDBMS, the emphasis is on JSON with dynamic schemas.</strong>

                            <li><strong>High Write Load- </strong> If the need is to load rows of data without much security issues, you can be using it. However do avoid using with transactions, unless there is security implemented.</li>
                            <li><strong>High Availability in Cloud-</strong>It is easier to set up a series of master-slave servers and recovery from failure is faster too.</li>
                            <li><strong>Scalability</strong>RDBMS has it’s own limitations when it comes to scalability, especially the performance which often tends to degrade. MongoDB comes with a built in solution for partition and database sharding.</li>
                            <li><strong>Big Data sets And Unstable Schema</strong>When you are dealing with tables larger than 1 GB, whose schema is never consistent, MongoDB is a pretty good option. Whenever you add a new field in MongoDB, it does not effect existing rows, and is faster, unlike a traditional RBDMS.</li>


                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed text-primary fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Question: Differences between sql and nosql databases ?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <strong>SQL databases are primarily called RDBMS or Relational Databases </strong>

                            <li><strong>Type</strong> SQL databases are table based databases</li>
                            <li><strong>Schema</strong> SQL databases have a predefined schema</li>
                            <li><strong>Ability to scale</strong> SQL databases are vertically scalable</li>
                            <li><strong>Hierarchical data storage</strong>SQL databases are not suitable for hierarchical data storage</li>
                            <li><strong>Design for</strong>Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</li>
                            <li><strong>Examples</strong>Oracle, Postgres, and MS-SQL..</li>
                        <strong>NoSQL databases are primarily called as Non-relational or distributed database </strong>

                            <li><strong>Type</strong>NoSQL databases can be document based, key-value pairs, graph databases</li>
                            <li><strong>Schema</strong> NoSQL databases use dynamic schema for unstructured data</li>
                            <li><strong>Ability to scale</strong> NoSQL databases are horizontally scalable</li>
                            <li><strong>Hierarchical data storage</strong>More suitable for the hierarchical data store as it supports key-value pair method.</li>
                            <li><strong>Design for</strong>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</li>
                            <li><strong>Examples</strong> 	MongoDB, Redis, Neo4j, Cassandra, Hbase.</li>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    </div>
    );
};

export default Blogs;