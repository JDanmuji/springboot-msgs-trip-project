import {createChatBotMessage} from "react-chatbot-kit";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import LinkList from "../widgets/LinkList";



const config = {
    initialMessages: [
        createChatBotMessage("안녕하세요 마실가실입니다🤗"),
        createChatBotMessage("마실가실을 방문해주셔서 감사합니다.", {delay: 300}),
        createChatBotMessage(
            "어떤 서비스를 찾으시나요?",
            {
                withAvatar: false,
                delay: 600,
                widget: "learningOptions",
            }
        ),
    ],
    customComponents: {
        // Replaces the default header
        header: () => <ChatHeader />,
        // Replaces the default bot avatar
        botAvatar: (props) => <div {...props} />,
        // Replaces the default bot chat message container
        botChatMessage: (props) => <ChatMessage {...props} bot />,
        // Replaces the default user icon
        userAvatar: (props) => <div {...props} />,
        // Replaces the default user chat message
        userChatMessage: (props) => <ChatMessage {...props}/>,
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "여행일정",
                        url:
                            "http://localhost:3000/tripschedule1",
                        id: 1,
                    },
                    {
                        text: "여행이야기",
                        url:
                            "http://localhost:3000/tripstory",
                        id: 2,
                    },
                    {
                        text: "항공",
                        url: "http://localhost:3000/flight",
                        id: 3,
                    },
                    {
                        text: "버스",
                        url: "http://localhost:3000/bus",
                        id: 4,
                    },
                    {
                        text: "맛집",
                        url: "http://localhost:3000/restaurantList",
                        id: 5,
                    },
                    {
                        text: "숙박",
                        url: "http://localhost:3000/staylist",
                        id: 6,
                    },
                ],
            },
        },
    ],


};

export default config;