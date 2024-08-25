import React, { useState } from 'react'
import './style.css'
const Nested = ({ folderData }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [add, setAdd] = useState(false);
    console.log(folderData);
    return (
        <div style={{ margin: " 1rem 0 0 2rem" }}>
            {
                folderData.isFolder ? (
                    <div>
                        <div className='same_row'>
                            <span onClick={() => setIsClicked(!isClicked)} >{folderData.name} 📁</span>
                            <div>
                                <button onClick={() => setAdd(true)}>folder +</button>
                                <button onClick={() => setAdd(true)}>file +</button>
                            </div>
                        </div>
                        {
                            add && (
                                <div className='input'>
                                    <input type="text" autoFocus onBlur={() => setAdd(false)}/>
                                </div>
                            )
                        }
                        {isClicked && (
                            folderData.items?.map((element) => {
                                return <Nested folderData={element} />
                            })
                        )
                        }
                    </div>
                ) : (
                    <span> {folderData.name} 📄</span>
                )
            }
        </div>
    )
}

export default Nested
