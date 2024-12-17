import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';

const BootAnimation = () => {
  const [bootText, setBootText] = useState([]);
  const [scrollPosition, setScrollPosition] = useState('100vh');
  const [started, setStarted] = useState(false); // new state to track if animation has started
  const { getValue,setValue } = useContext(UniversalContext);

  useEffect(() => {
    if (started) {
      playSound();
      const bootTextList = Array(100).fill(0).map(() => {
        const randomText = [
          "Booting Linux kernel version 5.10.0-rc7, built on 2022-02-15, with GCC 9.3.0, running on x86_64 architecture",
          "Loading kernel modules, including USB 3.0, SATA, and PCIe drivers, with support for Intel and AMD chipsets",
          "Initializing system services, including systemd, udev, and dbus, with dependencies on libudev and libsystemd",
          "Mounting file systems, including root, home, and boot, with options for noatime, nodiratime, and relatime",
          "Starting system daemons, including sshd, httpd, and ftpd, with configuration files in /etc/sysconfig",
          "Welcome to Linux, running on a 64-bit Intel Core i7 processor, with 16 GB of RAM and 1 TB of disk space",
          "Checking for updates, with package manager yum, and repositories from CentOS, EPEL, and RPMFusion",
          "Configuring network",
          "Loading device drivers, including those for graphics, sound, and network cards, with dependencies on kernel modules",
          "Initializing system logger",
          "Starting system monitor, with monitoring tools like top, htop, and glances, and configuration files in /etc/sysconfig",
          "Checking system integrity, with tools like fsck, and e2fsck, and configuration files in /etc/sysconfig",
          "Loading system fonts",
          "Configuring system language, with locale settings for en_US.UTF-8, and language support for English, Spanish, and French",
          "Initializing system theme, with GTK+ and Qt themes, and configuration files in /etc/sysconfig",
          "Starting system updater",
          "Checking for system updates, with package manager yum, and repositories from CentOS, EPEL, and RPMFusion",
          "Downloading system updates, with package manager yum, and repositories from CentOS, EPEL, and RPMFusion",
          "Installing system updates, with package manager yum, and repositories from CentOS, EPEL, and RPMFusion",
          "Configuring system settings",
          "Initializing system database, with MySQL, PostgreSQL, and SQLite, and configuration files in /etc/sysconfig",
          "Starting system server",
          "Configuring system security",
          "Initializing system backup",
          "Starting system restore",
          "Checking system disk space, with tools like df, and configuration files in /etc/sysconfig",
          "Initializing system network, with tools like ip, and configuration files in /etc/sysconfig",
          "Configuring system proxy",
          "Starting system VPN",
          "Initializing system audio",
          "Configuring system video, with tools like Xorg, and configuration files in /etc/sysconfig",
          "Starting system Bluetooth, with tools like BlueZ, and configuration files in /etc/sysconfig",
          "Initializing system Wi-Fi",
          "Configuring system Ethernet",
          "Starting system printer, with tools like CUPS, and configuration files in /etc/sysconfig",
          "Initializing system scanner, with tools like SANE, and configuration files in /etc/sysconfig",
          "Configuring system webcam, with tools like UVC, and configuration files in /etc/sysconfig",
          "Starting system microphone",
          "Initializing system speakers, with tools like ALSA, and configuration files in /etc/sysconfig",
          "Configuring system keyboard, with tools like Xorg, and configuration files in /etc/sysconfig",
          "Starting system mouse, with tools like Xorg, and configuration files in /etc/sysconfig",
          "Initializing system touchpad, with tools like Xorg, and configuration files in /etc/sysconfig",
          "Configuring system trackpad, with tools like Xorg, and configuration files in /etc/sysconfig",
          "Starting system USB, with tools like usbutils, and configuration files in /etc/sysconfig",
          "Initializing system SATA, with tools like ahci, and configuration files in /etc/sysconfig",
          "Configuring system PCIe, with tools like lspci, and configuration files in /etc/sysconfig",
          "Starting system ACPI, with tools like acpid, and configuration files in /etc/sysconfig",
          "Initializing system UEFI, with tools like efibootmgr, and configuration files in /etc/sysconfig",
          "Configuring system BIOS, with tools like dmidecode, and configuration files in /etc/sysconfig",
          "Starting system firmware, with tools like fwupd, and configuration files in /etc/sysconfig",
          "Initializing system hardware, with tools like lshw, and configuration files in /etc/sysconfig",
          "Configuring system software, with tools like yum, and configuration files in /etc/sysconfig",
          "Starting system applications, with tools like systemd, and configuration files in /etc/sysconfig",
          "Initializing system services, with tools like systemd, and configuration files in /etc/sysconfig",
          "Configuring system daemons, with tools like systemd, and configuration files in /etc/sysconfig",
          "Starting system processes, with tools like systemd, and configuration files in /etc/sysconfig",
          "Initializing system threads, with tools like pthread, and configuration files in /etc/sysconfig",
          "Configuring system timers",
          "Starting system interrupts, with tools like irqbalance, and configuration files in /etc/sysconfig",
          "Initializing system I/O",
          "Configuring system memory",
          "Starting system cache",
          "Initializing system CPU, with tools like cpufreq, and configuration files in /etc/sysconfig",
          "Configuring system GPU, with tools like lspci, and configuration files in /etc/sysconfig",
          "Starting system network interfaces, with tools like ip, and configuration files in /etc/sysconfig",
          "Initializing system routing, with tools like route, and configuration files in /etc/sysconfig",
          "Configuring system firewall, with tools like firewall-cmd, and configuration files in /etc/sysconfig",
          "Starting system intrusion detection, with tools like Snort, and configuration files in /etc/sysconfig",
          "Initializing system antivirus",
          "Configuring system antimalware",
          "Starting system encryption",
          "Initializing system decryption, with tools like cryptsetup, and configuration files in /etc/sysconfig",
          "Configuring system authentication, with tools like pam, and configuration files in /etc/sysconfig",
          "Starting system authorization, with tools like sudo, and configuration files in /etc/sysconfig",
          "Initializing system accounting, with tools like acct, and configuration files in /etc/sysconfig",
          "Configuring system auditing, with tools like auditd, and configuration files in /etc/sysconfig",
        ];
        return randomText[Math.floor(Math.random() * randomText.length)];
      });

      const intervalId = setInterval(() => {
        setBootText((prevBootText) => [...prevBootText, bootTextList[prevBootText.length]]);
        setScrollPosition(`${parseInt(scrollPosition, 10) - 20}px`);
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [started]);

  const playSound = () => {
    const audio = new Audio('/audio/theme.wav');
    audio.play();
  };

  const handleStartClick = () => {
    setStarted(true);
    setValue('turn on',true);
  };

  return (
    <Terminal>
      {started ? (
        <TerminalInner>
          <BootText
            style={{
              transform: `translateY(${scrollPosition})`,
              color: getValue('primary'),
            }}
          >
            {bootText.map((text, index) => (
              <div key={index}>{text}</div>
            ))}
          </BootText>
        </TerminalInner>
      ) : (
        <StartButton onClick={handleStartClick}>Start</StartButton>
      )}
    </Terminal>
  );
};

// styles

const Terminal = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 0;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* for Firefox */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  &:::-ms-scrollbar {
    display: none;
  }
`;

const TerminalInner = styled.div`
  height: 100%;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* for Firefox */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  &:::-ms-scrollbar {
    display: none;
  }
`;

const BootText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size:1rem;
  text-align: left;
  font-family: monospace;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* for Firefox */
  -ms-overflow-style: none; /* for Internet Explorer and Edge */
  &:::-ms-scrollbar {
    display: none;
  }
`;


const StartButton = styled.button`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 1px solid ;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 0px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;

export default BootAnimation;