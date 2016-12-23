import React from 'react'

function SiteHeader () {
  return (
    <div>
      <h2 className="title">Site Title</h2>
      <ul className="navElements">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Conctct</a></li>
      </ul>
    </div>
  )
}

import SiteHeader from 'SiteHeader'

function HomeLayout () {
  return (
    <div>
      <SiteHeader />
      <h1>Home page</h1>
      <p>some copy...</p>
    </div>
  )
}


function BillsProfileCard () {
  return (
    <section>
      <img src="http://placekitten.com/200/300" alt='looking good!'/>
      <h3>Bill the developer</h3>
      <p>Bill is a software engineer from chattanooga, tn....</p>
    </section>
  )
}

function ProfileCard (props) {
  return (
    <section>
      <img src={props.imageSrc} alt={props.altText}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </section>
  )
}

function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <div className="employees">
        <ProfileCard
          name="Bill"
          altText="super developer"
          imageSrc="http://placekitten.com/200/300"
          description="likes to code"
        />
        <ProfileCard
          name="Jeff"
          altText="a robot"
          imageSrc="http://placekitten.com/200/300"
          description="likes machine learning"
        />
      </div>
    </section>
  )
}

const billsProps = {
  name: 'Bill',
  altText: 'super developer',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes to code'
}

const jeffProps = {
  name: 'Jeff',
  altText: 'a robot',
  imageSrc: 'http://placekitten.com/200/300',
  description: 'likes machine learning'
}


function SpartanEmployees () {
  return (
    <section>
      <h1>Spartan Employees</h1>
      <div className="employees">
        <ProfileCard {...billProps} />
        <ProfileCard {...jeffProps} />
      </div>
    </section>
  )
}
