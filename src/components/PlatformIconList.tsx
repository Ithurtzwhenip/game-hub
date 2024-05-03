import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from "react-icons/all";
import {BsGlobe} from "react-icons/all";
import { Platform } from '../hooks/useGames'
import {HStack, Icon, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList=({platforms}: Props)=>{
    const iconMap: {[key:string]:IconType}={
        //name:PlayStation
        //slug:playstation
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
        
    }
    return(
        <HStack marginY={'10px'}>
        {platforms.map((platform)=>(
            <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
            ))}
        </HStack>
        )
}

export default PlatformIconList