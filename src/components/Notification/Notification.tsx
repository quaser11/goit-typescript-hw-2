import React, {FC} from 'react'

interface INotificationProps {
    children: React.ReactElement
}
const Notification:FC<INotificationProps> = ({children}) => {
    return <p>{children}</p>
}

export default Notification